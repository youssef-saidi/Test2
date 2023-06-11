import React,{useState} from 'react'
import { images } from '../../constants';

const Image = ({ image  }) => {
  const loadedImages = {};
  const [loaded, setLoaded] = useState(loadedImages[image]);

  const onLoad = () => {
    loadedImages[image] = true;
    setLoaded(true);
  };



  return (
    <>
    {!loaded && (

      <div className="rounded-md p-4 max-w-sm w-full flex justify-center items-center mx-auto my-auto">
        <div className="animate-pulse bg-slate-100 w-56 h-36 flex justify-center items-center space-x-4">


          <div className="flex flex-col justify-center items-center w-full h-full z-50">
            <div className="w-10 h-10 rounded-full animate-spin
                border-8 border-dashed border-purple-500 border-t-transparent">
            </div>

          </div>

        </div>
      </div>

    )}
{    <img
      alt=''
      className='w-56 h-56'
      onLoad={onLoad}
      src={image!=null?image:images.person}
    />}
  </>
  )
}

export default Image