'use client';
import { Timeline } from 'keep-react';

const EducationTimeline = ({ edu }) => {
  return (
    <Timeline className="w-1/3 border-l-0.5 border-[#828282] flex flex-col gap-20">
      {edu?.map((education, index) => (
        <Timeline.Item key={index} className="pl-5">
          <Timeline.Point className="w-2.5 h-2.5 -left-[5px] bg-[#3959C1] border-none" />
          <Timeline.Content className="flex flex-col gap-1">
            <p className="text-sm ">{education?.date}</p>
            <p className="text-sm ">{education?.location}</p>
            <p className="text-lg font-bold ">{education?.role}</p>
            <h6 className="text-2xl font-bold ">{education?.title}</h6>
            <p className=" ">{education?.description}</p>
          </Timeline.Content>
        </Timeline.Item>
      ))}
    </Timeline>
  );
};

export default EducationTimeline;
