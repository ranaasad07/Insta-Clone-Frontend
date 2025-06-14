import styles from './homepost.module.css';
import Stories from './userStories';
import ActualPosts from './usersPosts';



const Home = ()=>{

    return(
        <>
        <div className='container'>
            <div className='row'>
                <div className='col-8'>
                 <Stories/>
                 <ActualPosts/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;