import { Calendar, Clock, Star, Award } from "lucide-react";

import React from "react";
import "./index.css";

const statsList = [
  {
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
    icon: "Calendar",
    title: "MEMBER SINCE",
    text: "January 2022",
  },
  {
    iconColor: "text-green-600",
    iconBg: "bg-green-50",
    icon: "Clock",
    title: "LAST ACTIVE",
    text: "2 hours ago",
  },
  {
    iconColor: "text-yellow-600",
    iconBg: "bg-yellow-50",
    icon: "Star",
    title: "PROFILE SCORE",
    text: "95%",
  },
  {
    iconColor: "text-purple-600",
    iconBg: "bg-purple-50",
    icon: "Award",
    title: "LEVEL",
    text: "Pro User",
  },
];

const ProfileStats = () => {
  return (
    <ul className="flex list-none flex-wrap items-center gap-x-6 p-0">
      {statsList.map((eachObj) => {
        return (
          <li
            className="flex h-40 w-47.5 flex-col justify-center rounded-xl border-1 border-gray-100 bg-white p-6 shadow-xs"
            key={eachObj.text}
          >
            <div
              className={`mb-4 flex aspect-square w-12 items-center justify-center rounded-md ${eachObj.iconBg}`}
            >
              <Calendar className={`size-6 ${eachObj.iconColor}`} />
            </div>

            <h2 className="mb-0.5 text-sm font-semibold text-gray-500">
              {eachObj.title}
            </h2>
            <p className="text-xl font-bold text-gray-900">{eachObj.text}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ProfileStats;
