export const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/menu") {
          resolve({
            status: 200,
            message: "Success",
            data: {
                products : [
                  {
                    id: "1",
                    brand: "bose",
                    type: "noise_cancelling",
                    addedInYear: 2022,
                    alt: "Bose Sport Earbuds",
                    productName: "Bose QuietComfort",
                    image:
                      "https://res.cloudinary.com/dgzehngjw/image/upload/v1651056979/evolt-ecommerce/p11_mbade4.jpg",
                    description:
                      "Bose QuietComfort Noise Cancelling Earbuds - True Wireless Earbuds, Bluetooth in-Ear Headphones, The World's Most Effective Noise Cancelling Earbuds",
                    price: 3900.00,
                   
                    inStock: true,
                    discount: 30,
                    rating: 4,
                    
                  },
                    {
                      id: "2",
                      brand: "sony",
                      type: "speaker",
                      addedInYear: 2022,
                      alt: "Sony SRS-XB13",
                      productName: "Sony SRS-XB13",
                      image:
                        "https://res.cloudinary.com/dgzehngjw/image/upload/v1651057006/evolt-ecommerce/p17_z6inbi.jpg",
                      description:
                        "Sony SRS-XB13 Wireless Extra Bass Portable Compact Bluetooth Speaker with 16 Hours Battery Life, Type-C, IP67 Waterproof.",
                      price: 4000.00,
                     
                      inStock: true,
                      discount: 20,
                      rating: 4,
                      
                    },
                    {
                      id: "3",
                      brand: "sony",
                      type: "wireless",
                      addedInYear: 2022,
                      alt: "Sony WH-CH510",
                      productName: "Sony WH-CH510",
                      image:
                        "https://res.cloudinary.com/dgzehngjw/image/upload/v1651056511/evolt-ecommerce/p5_bxkrft.jpg",
                      description:
                        "Sony WH-CH510, On-Ear Headphones, up-to 35Hrs Playtime, Lightweight, Type-C, Play/Pause Control, 30mm Driver, Blue",
                      price: 2900.00,
                      
                      inStock: false,
                      discount: 15,
                      rating: 3,
                      
                    },
                    {
                      id: "4",
                      brand: "jbl",
                      type: "speaker",
                      addedInYear: 2020,
                      alt: "JBL Charge 4",
                      productName: "JBL Charge 4",
                      image:
                        "https://res.cloudinary.com/dgzehngjw/image/upload/v1651056511/evolt-ecommerce/p4_gsyfsc.jpg",
                      description:
                        "JBL Charge 4, Wireless Portable Bluetooth Speaker, 7500mAh Built-in Powerbank, AUX & Type C (Without Mic, Black)",
                      price: 2500.00,
                      
                      inStock: true,
                      discount: 10,
                      rating: 4,
                      
                    },

                    {
                      id: "5",
                      brand: "bose",
                      type: "wireless",
                      addedInYear: 2022,
                      alt: "Bose QuietComfort 35",
                      productName: "Bose QuietComfort 35",
                      image:
                        "https://res.cloudinary.com/dgzehngjw/image/upload/v1651057003/evolt-ecommerce/p16_qmllyb.jpg",
                      description:
                        "Bose QuietComfort 35 II Noise Cancelling Bluetooth Headphones— Wireless, Over Ear Headphones with Built in Microphone and Alexa Voice Control, Black",
                      price: 4900.00,
                      
                      inStock: true,
                      discount: 25,
                      rating: 4,
                      
                    },

                   
                    {
                      id: "6",
                      brand: "bose",
                      type: "wired",
                      addedInYear: 2022,
                      alt: "Bose SoundSport 761529",
                      productName: "Bose SoundSport 761529",
                      image:
                        "https://res.cloudinary.com/dgzehngjw/image/upload/v1651056668/evolt-ecommerce/p6_xx3wxy.jpg",
                      description:
                        "Bose SoundSport 761529 Bluetooth Wireless In Ear Earphones With Microphone Black",
                      price: 500.00,
                     
                      inStock: true,
                      discount: 30,
                      rating: 3,
                      
                    },
                   
                  ],

                  categories : [
                    {
                      id: "001",
                      alt: "product",
                      category: "wired",
                      image:
                        "https://res.cloudinary.com/dgzehngjw/image/upload/v1651056984/evolt-ecommerce/p12_auvdnf.jpg",
                    },
                    {
                      id: "002",
                      alt: "product",
                      category: "wireless",
                      image:
                        "https://res.cloudinary.com/dgzehngjw/image/upload/v1651052856/evolt-ecommerce/3_kgau6t.jpg",
                    },
                    {
                      id: "003",
                      alt: "product",
                      category: "noise_cancelling",
                      image:
                        "https://res.cloudinary.com/dgzehngjw/image/upload/v1651052852/evolt-ecommerce/2_rf00wy.jpg",
                    },
                  
                   
                  ]
            }
          });
        } else {
          reject({
            status: 404,
            message: "Food list not found."
          });
        }
      }, 1000);
    });
  };
  