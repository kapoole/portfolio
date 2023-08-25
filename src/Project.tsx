import * as imagesObject from './images/'

type ImagesType = {
  [key: string]: string;
};

const images: ImagesType = imagesObject;

type ProjectProps = {
  projectName: string
  imageName: string;
}


export const Project = ({projectName, imageName}: ProjectProps) => {
    return (
        <div className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-lg hover:shadow-xl">

        <a href="#">
                <img alt="A Medium Metamorphosis | Image"
                  src= {images[imageName]}
                  className="h-56 w-full object-cover" />

                <div className="p-4 sm:p-6">
                  <a href="#">
                    <h3 className="text-lg font-medium text-gray-900">
                      {projectName}
                    </h3>
                  </a>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                    dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                    sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                    voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                    Molestias explicabo corporis voluptatem?
                  </p>

                  <a href="#" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                    Find out more
                  </a>
                </div>
              </a>
              </div>
    )
}