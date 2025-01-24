import React from "react";
import IMG from '../assets/Logo1.png'
const EventCard = () => {
const arr=[
    {
    "image":IMG,
    "title": "Event 1",
    "date": "2022-01-01",
},
{
    "image":IMG,
    "title": "Event 1",
    "date": "2022-01-01",
},
{
    "image":IMG,
    "title": "Event 1",
    "date": "2022-01-01",
}
]
  return (
    <div className="grid grid-cols-3 pt-3">
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img
         width={250}
         className="m-auto"
          src={IMG}
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div>
  
    </div>
  );
};

export default EventCard;
