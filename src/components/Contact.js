const Contact = ()=>{


    return(

        <div>

            <h1 className="font-bold text-2xl p-4 m-4 "> contact us...</h1>

            <form>


                <input type = "text" className="border border-black p-2 m-2" placeholder="name"/>
                <input type = "text" className="border border-black" placeholder="message"/>

                <button className="border border-black p2 m-2 bg-gray-100 rounded-lg">Submit</button>
            </form>
        </div>
    )
}


export default Contact;