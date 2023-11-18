import React from "react";
import ReactDOM from "react-dom/client";

/*const parent=React.createElement(
    "div",
    {id:"parent"},
    [React.createElement(
        "div",
        {id:"child1"},
        [React.createElement("h1",{},"Im a h1 tag"),
        React.createElement("h2",{},"Im a h2 tag")]
    ),
    React.createElement(
        "div",
        {id:"child2"},
        [React.createElement("h1",{},"I'm a h1 tag"),
        React.createElement("h2",{},"I'm a h2 tag")]
    )]
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);*/

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
            </div>
            <div className="nav-items">
                 <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                 </ul>   
            </div>
        </div>
    );
};
const ResturantCard =(props) =>{
    const{resData}=props;
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId}/>

            <h3>{resData.info.name}</h3>
            <h3>{resData.info.cuisines}</h3>
            <h3>{resData.info.avgRating}</h3>
        </div>
    )
}
const resList=[{
    "info": {
      "id": "147619",
      "name": "Jai Shree Shankar Punjabi Dhaba",
      "cloudinaryImageId": "slfbprrckr7jk1zm58rd",
      "locality": "Mahatma Gandhi Marg",
      "areaName": "Civil Lines",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Indian",
        "North Indian",
        "Chinese",
        "South Indian",
        "Snacks",
        "Punjabi",
        "Beverages"
      ],
      "avgRating": 3.6,
      "veg": true,
      "feeDetails": {
        "restaurantId": "147619",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 2000
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 2000
      },
      "parentId": "108723",
      "avgRatingString": "3.6",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 3.9,
        "serviceability": "SERVICEABLE",
        "slaString": "29 mins",
        "lastMileTravelString": "3.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-11-19 00:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/jai-shree-shankar-punjabi-dhaba-mahatma-gandhi-marg-civil-lines-allahabad-147619",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "150376",
      "name": "Shri Ram Shakahari Bhojnalaya",
      "cloudinaryImageId": "suz4we5x7dgznrquxvu9",
      "locality": "Katju Road",
      "areaName": "Leader Road",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "North Indian"
      ],
      "avgRating": 4.1,
      "veg": true,
      "feeDetails": {
        "restaurantId": "150376",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 1500
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 1500
      },
      "parentId": "453828",
      "avgRatingString": "4.1",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 2.8,
        "serviceability": "SERVICEABLE",
        "slaString": "24 mins",
        "lastMileTravelString": "2.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-11-19 01:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/shri-ram-shakahari-bhojnalaya-katju-road-leader-road-allahabad-150376",
      "type": "WEBLINK"
    }
  }]
const Body =() => {
    return(
        <div className="body">
            <div className="Seacrh">Search</div>
            <div className="res-container">
                {resList.map((resturant)=>(
                    <ResturantCard resData={resturant}/>
                ))}
            </div>
        </div>
    )
};
const AppLayout = () => {
    return (
    <div className="app">
        <Header/>
        <Body/>
    </div>
    );
    
};

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);