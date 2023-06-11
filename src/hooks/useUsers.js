import { useEffect, useState } from 'react';
import axios from 'axios';
import hmacsha1 from 'hmacsha1'
import { v4 } from 'uuid'
import useDidMount from './useDidMount';

const generateSignature = (appid, env, uri) => {
    var auth_signature_method = 'HMAC-SHA1';
    var auth_consumer_key = encodeURIComponent(hmacsha1(appid, env));
    var auth_token = v4();
    var uri_path = uri.replace(new RegExp('http(s)?://[^/]*'), '')
    var auth_signature = encodeURIComponent(hmacsha1(appid, uri_path + auth_token));
    var auth_nonce = encodeURIComponent(hmacsha1(appid, v4()));
    var auth_callback = encodeURIComponent(uri_path);
    var auth_timestamp = new Date().getTime();

    return `Auth ?auth_signature=${auth_signature}&auth_nonce=${auth_nonce}&auth_callback=${auth_callback}&auth_timestamp=${auth_timestamp}&auth_token=${auth_token}&auth_signature_method=${auth_signature_method}&auth_consumer_key=${auth_consumer_key}`;
}





const useUsers = () => {

    async function getImageById(image_id) {
        try {
            const appid = 'challenge_uprodit';
            const env = 'production';
            const uri = `https://api.uprodit.com/v2/profile/picture/f/${image_id}`;
    
            const authHeader = generateSignature(appid, env, uri);
            const response = await axios.get(uri, {
                responseType: 'arraybuffer',
                headers: {
                    Authorization: authHeader,
                },
            });
    
            const arrayBuffer = response.data;
            const uint8Array = new Uint8Array(arrayBuffer);
    
            const textDecoder = new TextDecoder();
            const jsonString = textDecoder.decode(uint8Array);
    
            const jsonObject = JSON.parse(jsonString);
            if (jsonObject.mimeType && jsonObject.b64Content) {
            const dataUrl = "data:" + jsonObject.mimeType + ";base64," + jsonObject.b64Content;
            return dataUrl;

            }
            return null;
        } catch (error) {
            console.error(error);
        }
    }
    

    async function fetchImagesForUsers(userArray) {
        const data = []
        for (const user of userArray) {
            const url = await getImageById(user.image_id);
            const userObj = {...user,
                imageURL: url,
            };
            data.push(userObj);
        }
        setUsers(data);

    }

    const [Users, setUsers] = useState();
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const didMount = useDidMount(true);
    useEffect(() => {
        (async () => {
            try {

                setLoading(true);

                const appid = 'challenge_uprodit';
                const env = 'production';
                const uri = 'https://api.uprodit.com/v1/search/all?startIndex=0&maxResults=10&usecase=perso';

                const authHeader = generateSignature(appid, env, uri);
                const doc = await axios.get(uri, {
                    headers: {
                        'Authorization': authHeader
                    },
                });


                if (doc.data.length <= 0) {
                    if (didMount) {
                        setError('No  Users found.');
                        setLoading(false);
                    }
                } else {
                    if (didMount) {
                        fetchImagesForUsers(doc.data)
                       
                        setLoading(false);
                    }
                }
                // }
            } catch (err) {
                if (didMount) {
                    setLoading(false);
                    setError(err?.message || 'Something went wrong.');
                }
            }
        })();
    }, []);

    return { Users, isLoading, error };
};

export default useUsers;
