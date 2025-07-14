import { companyDetailsType } from '@/types/companyDetails'
import { cn } from '@/utils/cn'
import React, { useState } from 'react'
import { BiAward, BiBriefcase, BiChevronRight, BiLocationPlus, BiTrendingUp } from 'react-icons/bi'
import { CgCalendar } from 'react-icons/cg'
import { LuCode2 } from 'react-icons/lu'


const CompanyCard = ({ hoverId, companyDetails }: { hoverId: number | null, companyDetails: companyDetailsType }) => {
    return (
        <div className={cn('w-full h-full rounded-xl p-7 border border-black', { 'scale-110 shadow-xl duration-150': hoverId === companyDetails.id })}>
            <div className='flex flex-col gap-3'>
                <div className='flex gap-2 items-center'>
                    <img className='w-8 h-8 rounded-md shadow-lg' src={companyDetails.logo}></img>
                    <div className='flex flex-col justify-between p-2'>
                        <h1 className='text-2xl font-semibold font-mono'>{companyDetails.name}</h1>
                        <h3 className='text-lg font-medium font-mono'>{companyDetails.role}</h3>
                    </div>
                </div>
                <div className='flex gap-8 items-center'>
                    <div className='flex gap-2 items-center'>
                        <CgCalendar></CgCalendar>
                        <h4 className='text-md font-sans font-normal'>{companyDetails.duration}</h4>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <BiLocationPlus></BiLocationPlus>
                        <h4 className='text-md font-sans font-normal'>{companyDetails.location}</h4>
                    </div>
                </div>
                <div className='flex flex-col items-start gap-2'>
                    <ul className="space-y-3">
                        {companyDetails.description.map((item: string, idx: number) => (
                            <li key={idx} className="text-gray-700 leading-relaxed flex items-start group/item">
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
                        <h4 className="font-semibold text-gray-700">Technologies</h4>
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

                <div className="text-center mt-20">
                    <div className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl group">
                        <BiBriefcase className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        <span>Let's Build Something Amazing Together</span>
                        <BiChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CompanyCard