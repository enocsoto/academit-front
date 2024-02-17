
interface VideoProps {
  src: string;
}
export const Video: React.FC<VideoProps> = ({ src }) => {
  return (
    <>

      <div className="border shadow-black rounded-md overflow-hidden w-[900px] h-[500px] drop-shadow-sm group">
        <video className="justify-center" controls
        src={src}></video>
      </div>


    </>
  )

}
