import LycaonImg from './images/lycaon.png'

const Lycaon = LycaonImg;


export const Product = () => {
    return (
        <div className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-lg">

        <a href="#">
                <img alt="A Medium Metamorphosis | Image"
                  src={Lycaon}
                  className="h-56 w-full object-cover" />

                <div className="p-4 sm:p-6">
                  <a href="#">
                    <h3 className="text-lg font-medium text-gray-900">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
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