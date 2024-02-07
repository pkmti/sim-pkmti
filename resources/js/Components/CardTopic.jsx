export default function CardTopic({title, description}){
   return(
      <>
      <div className="block text-center p-4 bg-white rounded-lg  shadow-md hover:shadow-xl transition-shadow duration-300
      ">
         <h3 className="text-2xl text-primary font-bold mb-2">{title}</h3>
         <p className="text-center text-slate-500">{description}</p>
      </div>
      </>
   )
}