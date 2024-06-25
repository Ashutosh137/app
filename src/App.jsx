import { useEffect, useState } from "react";
function App() {
  const [option, setOption] = useState("daily");

  const dailyData = [
    {
      name: "fruit",
      imageurl:
        "https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4",
      quantity: 1000,
    },
    {
      name: "vegetables",
      imageurl:
        "https://www.euroschoolindia.com/wp-content/uploads/2023/10/importance-of-eating-a-variety-of-fruits-for-kids-health-jpg.webp",
      quantity: 500,
    },
    {
      name: "millets",
      imageurl:
        "https://i0.wp.com/www.smartfood.org/wp-content/uploads/2022/04/millets.jpg?fit=1024%2C655&ssl=1",
      quantity: "as needed in ",
    },
    {
      name: "coconut water",
      imageurl: "https://static.toiimg.com/photo/106288548.cms",
      quantity: "as needed in ",
    },
    {
      name: "sprouts / green leaves",
      imageurl:
        "https://www.indianveggiedelight.com/wp-content/uploads/2022/11/how-to-make-sprouts-featured-500x375.jpg",
      quantity: 100,
    },
    {
      name: "dry fruits",
      imageurl:
        "https://thewholesaler.in/cdn/shop/collections/thewholesalerco_dry-pista_pistachio_460x@2x.jpg?v=1659940617",
      quantity: 100,
    },
    {
      name: "hunza tea",
      imageurl:
        "https://img.freepik.com/free-vector/exotic-leaf-plant-jungle-isolated-icon_18591-83631.jpg",
      quantity: "as needed in ",
    },
  ];

  const weeklyData = [
    {
      name: "fruit",
      imageurl:
        "https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4",
      quantity: 7000,
    },
    {
      name: "vegetables",
      imageurl:
        "https://www.euroschoolindia.com/wp-content/uploads/2023/10/importance-of-eating-a-variety-of-fruits-for-kids-health-jpg.webp",
      quantity: 3500,
    },
    {
      name: "millets",
      imageurl:
        "https://i0.wp.com/www.smartfood.org/wp-content/uploads/2022/04/millets.jpg?fit=1024%2C655&ssl=1",
      quantity: "as needed in ",
    },
    {
      name: "coconut water",
      imageurl: "https://static.toiimg.com/photo/106288548.cms",
      quantity: "as needed in ",
    },
    {
      name: "sprouts / green leaves",
      imageurl:
        "https://www.indianveggiedelight.com/wp-content/uploads/2022/11/how-to-make-sprouts-featured-500x375.jpg",
      quantity: 700,
    },
    {
      name: "dry fruits",
      imageurl:
        "https://thewholesaler.in/cdn/shop/collections/thewholesalerco_dry-pista_pistachio_460x@2x.jpg?v=1659940617",
      quantity: 700,
    },
    {
      name: "hunza tea",
      imageurl:
        "https://img.freepik.com/free-vector/exotic-leaf-plant-jungle-isolated-icon_18591-83631.jpg",
      quantity: "as needed in ",
    },
  ];

  const monthlyData = [
    {
      name: "fruit",
      imageurl:
        "https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4",
      quantity: 30000,
    },
    {
      name: "vegetables",
      imageurl:
        "https://www.euroschoolindia.com/wp-content/uploads/2023/10/importance-of-eating-a-variety-of-fruits-for-kids-health-jpg.webp",
      quantity: 15000,
    },
    {
      name: "millets",
      imageurl:
        "https://i0.wp.com/www.smartfood.org/wp-content/uploads/2022/04/millets.jpg?fit=1024%2C655&ssl=1",
      quantity: "as needed in ",
    },
    {
      name: "coconut water",
      imageurl: "https://static.toiimg.com/photo/106288548.cms",
      quantity: "as needed in ",
    },
    {
      name: "sprouts / green leaves",
      imageurl:
        "https://www.indianveggiedelight.com/wp-content/uploads/2022/11/how-to-make-sprouts-featured-500x375.jpg",
      quantity: 3000,
    },
    {
      name: "dry fruits",
      imageurl:
        "https://thewholesaler.in/cdn/shop/collections/thewholesalerco_dry-pista_pistachio_460x@2x.jpg?v=1659940617",
      quantity: 3000,
    },
    {
      name: "hunza tea",
      imageurl:
        "https://img.freepik.com/free-vector/exotic-leaf-plant-jungle-isolated-icon_18591-83631.jpg",
      quantity: "as needed in ",
    },
  ];

  const [optionData, setOptionData] = useState(dailyData);

  useEffect(() => {
    if (option === "daily") {
      setOptionData(dailyData);
    } else if (option === "weekly") {
      setOptionData(weeklyData);
    } else if (option === "monthly") {
      setOptionData(monthlyData);
    }
  }, [option]);

  return (
    <div className="bg-lime-50 text-black p-1 sm:p-3">
      <main className=" bg-slate-50 my-2 rounded-md px-5 py-3 sm:mx-4 mx-1">
        <header className="flex flex-col sm:flex-row mb-10  justify-around ">
          <div className="flex mr-auto py-3 space-x-2">
            <img
              className="rounded-full w-16 h-16 aspect-square  "
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5yGQHO1bq96bdNigaDdG7EbxSWQ37mbmW1Q&usqp=CAU"
              }
              alt="logo"
            />
            <div className="flex flex-col my-auto   space-y-1">
              <h2 className="text-lg font-semibold">Dr. Darlene Robertson </h2>
              <p className="capitalize text-sm">nutriitioninst</p>
            </div>
          </div>
          <div className="flex align-middle">
            <p className="text-lime-700 sm:mx-4 mx-1 py-2 my-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              ipsa?
            </p>
            <i className="p-2 text-3xl my">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
                <path d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z" />
              </svg>
            </i>
          </div>
        </header>
        <div className="rounded-lg bg-lime-100 my-2 sm:mx-4 mx-1 p-4 px-5 ">
          <div className="p-3 grid sm:grid-cols-2 grid-cols-1   rounded-md capitalize ">
            <ul className=" w-full gap-1 flex">
              <h6 className="w-full font-bold capitalize  ">rS</h6>
              <h6 className="font-bold capitalize w-24 ">durtion</h6>
            </ul>
            <ul className=" w-full gap-1 flex">
              <h6 className="w-full font-bold capitalize  ">rS</h6>
              <h6 className="font-bold capitalize w-24 ">durtion</h6>
            </ul>
          </div>
          <div className=" p-3 py-5 rounded-md capitalize grid sm:grid-cols-2 gap-2 grid-cols-1">
            <ul className="flex space-x-1 capitalize">
              <label className="w-full rounded-md  p-2 bg-white">
                Lorem ipsum, dolor sit amet consectetur{" "}
              </label>
              <p className="w-24 p-2 rounded-md  bg-white">100 g</p>
            </ul>
            <ul className="flex space-x-1 capitalize">
              <label className="w-full rounded-md  p-2 bg-white">
                Lorem ipsum, dolor sit amet consectetur{" "}
              </label>
              <p className="w-24 p-2 rounded-md  bg-white">100 g</p>
            </ul>
            <ul className="flex space-x-1 capitalize">
              <label className="w-full rounded-md  p-2 bg-white">
                Lorem ipsum, dolor sit amet consectetur{" "}
              </label>
              <p className="w-24 p-2 rounded-md  bg-white">100 g</p>
            </ul>
            <ul className="flex space-x-1 capitalize">
              <label className="w-full rounded-md  p-2 bg-white">
                Lorem ipsum, dolor sit amet consectetur{" "}
              </label>
              <p className="w-24 p-2 rounded-md  bg-white">100 g</p>
            </ul>
            <ul className="flex space-x-1 capitalize">
              <label className="w-full rounded-md  p-2 bg-white">
                Lorem ipsum, dolor sit amet consectetur{" "}
              </label>
              <p className="w-24 p-2 rounded-md  bg-white">100 g</p>
            </ul>
            <ul className="flex space-x-1 capitalize">
              <label className="w-full rounded-md  p-2 bg-white">
                Lorem ipsum, dolor sit amet consectetur{" "}
              </label>
              <p className="w-24 p-2 rounded-md  bg-white">100 g</p>
            </ul>
            <ul className="flex space-x-1 capitalize">
              <label className="w-full rounded-md  p-2 bg-white">
                Lorem ipsum, dolor sit amet consectetur{" "}
              </label>
              <p className="w-24 p-2 rounded-md  bg-white">100 g</p>
            </ul>
            <ul className="flex space-x-1 capitalize">
              <label className="w-full rounded-md  p-2 bg-white">
                Lorem ipsum, dolor sit amet consectetur{" "}
              </label>
              <p className="w-24 p-2 rounded-md  bg-white">100 g</p>
            </ul>
          </div>
        </div>

        <div className="rounded-lg bg-lime-100 sm:mx-4 mx-1  p-4 px-5 ">
          <h6 className="font-bold capitalize mb-2 ">advice</h6>
          <p className="bg-white text-slate-800 rounded-md p-3 ">
            Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Eaque corporis in consectetur enim modi doloremque explicabo. Harum,
            a! Explicabo, ipsam! ipsum Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Iusto, necessitatibus? dolor sit amet consectetur
            adipisicing elit. A odio perspiciatis maiores eveniet, nulla labore
            veniam ullam et nisi eaque quasi iure, ipsum sit repellat rem hic
            cupiditate beatae minus expedita. Veniam, quam illum.
          </p>
        </div>
      </main>

      <div className="my-5 sm:mx-4 mx-1 ">
        <div className="flex my-5 justify-center capitalize space-x-5">
          <h1 className="text-2xl  font-bold">health grocery list</h1>
          <select
            name="rote"
            value={option}
            onChange={(e) => {
              setOption(e.target.value);
            }}
            className="text-white p-1 border capitalize border-black rounded-md"
          >
            <option value="daily">daily</option>
            <option value="weekly">weekly</option>
            <option value="monthly">monthly</option>
          </select>
        </div>

        <div className="flex justify-between space-x-2 w-full">
          <div className="flex flex-col w-full  ">
            {optionData.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex bg-cyan-100 rounded-md p-2 my-1 w-full align-middle justify-between"
                >
                  <div className="flex  align-middle space-x-2 capitalize">
                    <img
                      className="rounded-full w-8 aspect-square  "
                      src={item.imageurl}
                      alt="logo"
                    />
                    <label className="font-semibold my-auto">
                      {item.name}:
                    </label>
                  </div>
                  <label className="ml-auto capitalize text-right px-3 my-auto">
                    {item.quantity} G
                  </label>
                </div>
              );
            })}
          </div>
          <img
            className="rounded-xl hidden md:block w-96 aspect-square  "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQq3Fatvtf8oChC5wvDESKS_sKs6Jrv8VF5A&usqp=CAU"
            alt="logo"
          />
        </div>
        <div className="flex my-4">
          <button className="rounded-md mx-auto bg-lime-500 text-white cursor-pointer px-4 py-2">
            Buy Now
          </button>
        </div>
      </div>

      <div className="m-3 sm:mx-4 mx-1">
        <h3 className="text-xl font-bold capitalize my-1">instruction</h3>
        <div className="bg-white p-4 py-5 rounded-md capitalize ">
          <h6 className="text-base font-[600] ">
            points to note for best benifit of foodCriptions
          </h6>
          <ol type="A" className="grid sm:grid-cols-2 grid-cols-1 gap-2 my-2">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              placeat
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              placeat
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              placeat
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              placeat
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              placeat
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              placeat?
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              placeat?
            </li>
          </ol>
        </div>
      </div>
      <div className="m-3 sm:mx-4 mx-1">
        <h3 className="text-xl font-bold capitalize my-1">importtant note:</h3>
        <div className="bg-white p-4 py-5 rounded-md capitalize space-y-2">
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque,
            sapiente?
          </p>
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Sit, commodi?
            Eaque, sapiente?
          </p>
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque,
            sapiente?
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
