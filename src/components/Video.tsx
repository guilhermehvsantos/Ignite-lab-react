import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, ChalkboardTeacher, Lightning } from "phosphor-react";

import '@vime/core/themes/default.css';
import { useGetLessonBySlugQuery } from "../generated";


interface VideoProps {
    lessonSlug: string;
}

export function Video (props: VideoProps) {
    const { data } = useGetLessonBySlugQuery({
        variables: {
            slug: props.lessonSlug,
        }
    })

    if(!data || !data.lesson) {
        return ( 
            <div className="flex-1">
                <p>Carregando...</p>
            </div>)
    }

    return (
        <div className="flex-1">
            <div className="bg-black flex justify-center">
                    <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
                        <Player>
                            <Youtube videoId={data.lesson.videoId}/>
                            <DefaultUi />
                        </Player>
                    </div>
                </div>
                <div className="p-8 max-w-[1100px] mx-auto">
                    <div className="flex items-start gap-16">
                        <div className="flex-1">
                            <h1 className="text-2xl font-bold">
                            {data.lesson.title}
                            </h1>
                            <p className="mt-4 text-gray-200 leading-relaxed">
                            {data.lesson.description}
                            </p>

                            {data.lesson.teacher && (
                                <div className="flex items-center gap-4 mt-6">
                                <img 
                                    className="h-16 w-16 rounded-full border-2 border-blue-600"
                                    src={data.lesson.teacher.avatarURL}
                                    alt="" 
                                />
                                <div className="leading-relaxed">
                                    <strong className="font-bold text-2xl block">{data.lesson.teacher.name}</strong>
                                    <span className="text-gray-200 text-sm block">{data.lesson.teacher.bio}o</span>
                                </div>
                            </div>
                            )}

                        </div>
                        <div className="flex flex-col gap-4">
                            <a href="https://www.discord.com" target="_blank" className="p-4 text-sm bg-blue-700 flex items-center justify-center rounded font-bold uppercase gap-2 hover:bg-blue-600 transition-colors">
                                <DiscordLogo size={24}/>
                                Comunidade do Discord
                            </a>
                            <a href="https://www.google.com" target="_blank" className="p-4 text-sm border border-yellow-600 text-yellow-600 flex items-center justify-center rounded font-bold uppercase gap-2 hover:bg-yellow-600 hover:text-yellow-900 hover:border-yellow-600 transition-colors">
                                <Lightning size={24}/>
                                Faça o Desafio
                            </a>
                            
                        </div>
                    </div>
                    <div className="gap-8 my-20 grid grid-cols-2">
                        <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                            <div className="bg-blue-500 h-full p-6 flex items-center">
                                <FileArrowDown size={40}/>
                            </div>
                            <div className="py-6 leading-relaxed">
                                <strong className="text-2xl">
                                    Material complementar
                                </strong>
                                <p className="text-sm text-gray-200 mt-2">
                                    Acesse o material complementar para aprimorar seus estudos
                                </p>
                            </div>
                            <div className="h-full p-6 flex items-center">
                                <CaretRight size={24}/>
                            </div>
                        </a>
                        <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                            <div className="bg-blue-500 h-full p-6 flex items-center">
                                <ChalkboardTeacher size={40}/>
                            </div>
                            <div className="py-6 leading-relaxed">
                                <strong className="text-2xl">
                                    Aulas Complementares
                                </strong>
                                <p className="text-sm text-gray-200 mt-2">
                                    Assista as aulas complementares para aprimorar seus estudos
                                </p>
                            </div>
                            <div className="h-full p-6 flex items-center">
                                <CaretRight size={24}/>
                            </div>
                        </a>
                    </div>
                </div>
            


        </div>
    )
}