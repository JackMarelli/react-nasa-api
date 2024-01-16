import styles from "./Home.module.scss";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import Dropdown from "../../components/Dropdown/Dropdown";
import Modal from "../../components/Modal/Modal";
import Photo from "../../components/Photo/Photo";
import "../../App.module.scss";
import React, { useEffect, useState } from "react";
import ApiManager from "../../api/ApiManager";

export default function Home() {
  const api = new ApiManager();
  const placeHolderUrl = "https://via.assets.so/img.jpg?w=1200&h=700&tc=#fff&bg=#ccc&t=Error";
  const roverOptions = [
    "All",
    "Curiosity",
    "Opportunity",
    "Spirit"
  ];
  const cameraOptions = [
    "All",
    "FHAZ",
    "RHAZ",
    "MAST",
    "CHEMCAM",
    "MAHLI",
    "MARDI",
    "NAVCAM",
    "PANCAM",
    "MINITES"
  ];
  const sols = 4000;
  const [photos, setPhotos] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({
    rovers: "curiosity",
    cameras: "rhaz",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState(null);
  const localImageSrc = './camtable.jpg';

  const openModal = (imageUrl) => {
    console.log("opening modal");
    setModalImageUrl(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log("closing modal");
    setModalImageUrl(null);
    setIsModalOpen(false);
  };

  const handleSelect = (selectedOption, dropdownId) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [dropdownId]: selectedOption,
    }));
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await api.get(
          `mars-photos/api/v1/rovers/${selectedOptions.rovers.toLowerCase()}/photos?sol=300&camera=${selectedOptions.cameras.toLowerCase()}`
        );
        const fetchedPhotos = res.data.photos.map((item) => item.img_src);
        setPhotos(fetchedPhotos);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [selectedOptions]); // Trigger the effect when selectedOptions change

  return (
    <>
      <BaseLayout>
        <div className="container px-10">
          <div className="flex justify-start py-3 gap-3">
            <Dropdown
              id="rovers"
              options={roverOptions}
              onSelect={(option) => handleSelect(option, "rovers")}
            />
            <Dropdown
              id="cameras"
              options={cameraOptions}
              onSelect={(option) => handleSelect(option, "cameras")}
            />
            <button
              onClick={() => openModal(localImageSrc)}
              className="block text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Cameras Table
            </button>

          </div>
          <div>
            {photos.length === 0 ? (
              <span className="text-4xl font-bold text-gray-300 w-full">No images found for this camera</span>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {photos.map((url, index) => (
                  <Photo key={index} url={url} onClick={() => openModal(url)} />
                ))}
              </div>
            )}
          </div>
        </div>
      </BaseLayout>
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        imageUrl={modalImageUrl}
      />
    </>
  );
}
