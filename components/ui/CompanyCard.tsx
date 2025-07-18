import { companyDetailsType } from '@/types/companyDetails'
import { cn } from '@/utils/cn'
import React, { useState } from 'react'
import { BiAward, BiBriefcase, BiChevronRight, BiLocationPlus, BiTrendingUp } from 'react-icons/bi'
import { CgCalendar } from 'react-icons/cg'
import { LuCode2 } from 'react-icons/lu'


const CompanyCard = ({ hoverId, companyDetails, companyId, onMouseEnter, onMouseLeave }: { hoverId: number | null, companyDetails: companyDetailsType, onMouseEnter: () => void, onMouseLeave: () => void, companyId: number }) => {
    return (
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={cn('rounded-xl p-7 border border-gray-500 hover:cursor-pointer duration-200 ', { 'scale-110 ease-in-out shadow-xl shadow-white/40 ': hoverId === companyId })}>
            <div className='flex flex-col gap-3'>
                <div className='flex gap-2 items-center'>
                    <img className='w-12 h-12 rounded-md shadow-lg' src={companyDetails.logo}></img>
                    <div className='flex flex-col justify-between p-2'>
                        <h1 className='text-3xl font-semibold font-mono bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-purple-600'>{companyDetails.name}</h1>
                        <h3 className='text-lg font-normal font-sans tracking-wide text-gray-400'>{companyDetails.role}</h3>
                    </div>
                </div>
                <div className='flex gap-8 items-center'>
                    <div className='flex gap-2 items-center'>
                        <CgCalendar className='text-green-500'></CgCalendar>
                        <h4 className='text-md font-sans font-normal'>{companyDetails.duration}</h4>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <BiLocationPlus className='text-blue-500'></BiLocationPlus>
                        <h4 className='text-md font-sans font-normal'>{companyDetails.location}</h4>
                    </div>
                </div>
                <div className='flex flex-col items-start gap-2'>
                    <ul className="space-y-3">
                        {companyDetails.description.map((item: string, idx: number) => (
                            <li key={idx} className="text-gray-400 leading-relaxed flex items-start group/item">
                                <div className={`w-2 h-2 bg-gradient-to-r ${companyDetails.color} rounded-full mt-2.5 mr-4 flex-shrink-0 transition-transform group-hover/item:scale-125`} />
                                <span className="group-hover/item:text-gray-900 transition-colors">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                    <div className="flex items-center space-x-2 mb-4">
                        <LuCode2 className="w-4 h-4 text-gray-500" />
                        <h4 className="font-semibold text-gray-300">Technologies</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {companyDetails.technologies.map((tech: string, idx: number) => (
                            <span
                                key={idx * 34}
                                className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-all duration-200 hover:scale-105 cursor-default"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="flex items-center space-x-2 mb-4">
                        <BiAward className="w-4 h-4 text-gray-500" />
                        <h4 className="font-semibold text-gray-700">Key Achievements</h4>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3">
                        {companyDetails.achievements.map((achievement: string, idx: number) => (
                            <div key={idx * 584} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group/achievement">
                                <BiTrendingUp className="w-4 h-4 text-green-500 group-hover/achievement:scale-110 transition-transform" />
                                <span className="text-gray-700 font-medium">{achievement}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyCard