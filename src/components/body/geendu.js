
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import "./jamin.css"
const Table = ({ products }) => {
    // const firstProduct = products.length > 0 ? products[0] : null;
    let firstProduct;
    if (products.length > 0) {
        const { _id, si, name, amount, address, year, text } = products[0];
        firstProduct = { _id, si, name, amount, address, year, text };
    }

    let link = "https://nawnitstudio.000webhostapp.com/certificate/index.html";
    return (
        <>
            <main id='grandparent_jamin'>
                <h1>UNDER DEVELOPMENT</h1>
                {firstProduct? (
                    <div className='grandparent__jamin_child'>
                        <div className='header__child_jamin'>
                            <p>home/jamin</p>
                        </div>
                        <div className='body__child_jamin'>
                            <div className='paragraph_body__child_jamin'>
                                <div className='paragraph_body__child_jamin'>

                                    {/* <h1>{props.title || <Skeleton />}</h1>
                                {props.body || <Skeleton count={10} />} */}
                                    <div key={firstProduct._id || <Skeleton />}>
                                        <div className='header_body__child_jamin'>
                                            <h1>ज़मीन रसीद बनाने के लिए कुछ दस्तावेज़</h1>
                                        </div>
                                        <p>{firstProduct.text ? firstProduct.text : <Skeleton count={10} />}</p><br></br>
                                        <p>{firstProduct.text ? firstProduct.text : <Skeleton count={10} />}</p>
                                        <p><a href={link}>recipt-link</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className='call_loginbutton'>
                                <button type='submit'>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                ): <p>server-error :: "under-development"</p>} </main>
        </>
    );
};

export default Table;
