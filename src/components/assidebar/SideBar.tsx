import {FC} from 'react';
interface AsideBarProps {
    asideContent: React.ReactNode;
    videoUrl: string;
  }
export const SideBar: FC<AsideBarProps> = ({asideContent, videoUrl}) => {
  return (
    <aside className="h-screen">
        <nav className="h-full flex flex-col bg-white border-r shadow-sm">
    <div className="p-4 pb-2 flex justify-between items-center">
    <img src="" alt="" className="w-32"/>
    <button className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">

    </button>
    </div>
    <ul className="flex-1 px-3">{}</ul>
    <div className="border-t flex p-3">
        <img src="" alt=""
        className="w-10 rounded-md" />
        <div className="w-10 h-10 rounded-md"></div>
    </div>
        </nav>
    {asideContent}
    <video controls className='w-full' src={videoUrl}/>
    </aside>
  )
}
