import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function ImgWithRoundedCorners() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('/api/products')
            .then((response) => {
                setProducts(response.data)  // in axios we dont need to parse the response to JSON format(-- reson for using axios)
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])

    // useEffect(() => {
    //     // Use an asynchronous function to fetch data and update state
    //     async function fetchData() {
    //         try {
    //             const response = await axios.get('/api/products');
    //             setProducts(response.data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }

    //     fetchData(); // Call the async function to fetch data
    // }, []); // The empty dependency array ensures the effect runs only once on component mount

    return (
        <div className="mt-20">
            <div className="flex justify-between">
                <div className="text-white ml-44 font-semibold mb-12 mt-3rem text-2xl">
                    Currently Trending Games
                </div>
                <div>
                    <a href="#buttons-with-link">
                        <Button className="mr-32">SEE ALL</Button>
                    </a>
                </div>
            </div>

            <div className="flex ml-44 gap-12 flex-wrap">
                {products.map((product, index) => (
                    <div key={product.id} className="text-white font-semibold text-center">
                        <img
                            className="h-56 w-52 rounded-lg object-cover object-center"
                            src={product.src}
                            alt="game image"
                        />
                        <FontAwesomeIcon icon={faFire} className=" mr-2" style={{ color: "#ffffff", }} />
                        {`${product.followers} Followers`}

                    </div>
                ))}
            </div>
        </div>
    );
}

export default ImgWithRoundedCorners;
