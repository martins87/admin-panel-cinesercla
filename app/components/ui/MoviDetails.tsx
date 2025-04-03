import Image from "next/image"
import { Clock, Calendar, Volume2 } from 'lucide-react'
import { voice } from "@/app/constants/icons";


type SessionRoom = {
    name: string
    type: string
    times: string[]
    date: string
    status: string
}

type Session = {
    location: string
    city: string
    rooms: SessionRoom[]
}

type MovieDetailsProps = {
    poster: string
    title: string
    subtitle?: string
    genre: string
    classification: string
    duration: string
    releaseDate: string
    director: string
    distributor: string
    id: string
    sessions: Session
}

export function MovieDetails({
    poster,
    title,
    subtitle,
    genre,
    classification,
    duration,
    releaseDate,
    director,
    distributor,
    id,
    sessions
}: MovieDetailsProps) {
    return (
        <div className="w-full rounded-lg p-4 shadow-sm bg-white">
            <div className="w-full rounded-lg p-3 shadow-sm bg-gray-50">
                <div className="mb-6 w-full bg-white rounded-lg p-3 shadow-sm">
                    <div className="flex">
                        <div className="flex-shrink-0 mr-6">
                            <Image
                                src={"https://placehold.co/100x120"}
                                alt={title}
                                width={150}
                                height={200}
                                className="rounded-md object-cover"
                            />
                        </div>
                        <div className="flex-grow">
                            <div className="grid grid-cols-4 gap-y-10 gap-x-10">
                                <div>
                                    <h3 className="text-gray-700 font-medium">{title}</h3>
                                    <p className="text-gray-600">{subtitle}</p>
                                </div>
                                <div>
                                    <h3 className="text-gray-700 font-medium">Gênero</h3>
                                    <p className="text-gray-600">{genre}</p>
                                </div>
                                <div>
                                    <h3 className="text-gray-700 font-medium">Classificação</h3>
                                    <p className="text-gray-600">{classification}</p>
                                </div>
                                <div>
                                    <h3 className="text-gray-700 font-medium">Diretor</h3>
                                    <p className="text-gray-600">{director}</p>
                                </div>
                                <div>
                                    <h3 className="text-gray-700 font-medium">Lançamento</h3>
                                    <p className="text-gray-600">{releaseDate}</p>
                                </div>
                                <div>
                                    <h3 className="text-gray-700 font-medium">Duração</h3>
                                    <p className="text-gray-600">{duration}</p>
                                </div>
                                <div>
                                    <h3 className="text-gray-700 font-medium">Distribuidora</h3>
                                    <p className="text-gray-600">{distributor}</p>
                                </div>
                                <div>
                                    <h3 className="text-gray-700 font-medium">ID</h3>
                                    <p className="text-gray-600">{id}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg w-full bg-white rounded-lg p-3 shadow-sm">
                    <div className="pb-2">
                        <h3 className="font-medium text-lg text-gray-800">{sessions.location} • {sessions.city}</h3>
                    </div>

                    <div className="space-y-3">
                        {sessions.rooms.map((room, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg p-4 shadow-sm">
                                <div className="flex items-center">
                                    <div className="flex-1">
                                        <h4 className="font-medium text-gray-800">{room.name}</h4>
                                        <p className="text-sm text-gray-500">{room.type}</p>
                                    </div>

                                    <div className="flex items-center gap-2 flex-1">
                                        <Clock className="h-5 w-5 text-gray-500" />
                                        <div className="flex items-center">
                                            {room.times.map((time, timeIndex) => (
                                                <div key={timeIndex} className="flex items-center">
                                                    <span className="text-gray-700">{time}</span>
                                                    {timeIndex < room.times.length - 1 && (
                                                        <span className="mx-2 text-gray-400">•</span>
                                                        
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="w-px h-8 mx-5 bg-gray-500" />
                                    <div className="flex items-center gap-2 flex-1">
                                        <Calendar className="h-5 w-5 text-gray-500" />
                                        <span className="text-gray-700">{room.date}</span>
                                    </div>
                                    <div className="w-px h-8 mx-5 bg-gray-500" />
                                    <div className="flex items-center gap-2">
                                        <Image src={voice} alt="Voice Icon" width={20} height={20} />
                                        <span className="text-gray-700 font-medium">{room.status}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
