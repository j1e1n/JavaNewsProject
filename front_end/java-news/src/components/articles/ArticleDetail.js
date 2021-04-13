import React from 'react';


const ArticleDetail = ({article, currentUser, handleFavouriteToggle}) => {

    if(!article){
        return <p>Loading...</p>
    }



    

    const favouriteDisplay = function(article){
        console.log("favouriteDisplay called" )
        console.log(currentUser);
        if(currentUser.role.role === "User"){
            // return <p>button here</p>
            return <button onClick={() => {handleFavouriteToggle(article)}}>
                {article.favourite ? 'Delete from Reading List' : 'Add to Reading List'}</button>
        }else{
            return null
        }

    }

    return(
    
        <div className="article-detail">
            <h1>{article.headline}</h1>
            <img src={article.image} height="400px" width="auto" alt=""/>
            <p>Author: {article.journalist.name}</p>
            <p>Date: {article.date}</p>
            <p>Category: {article.category.type}</p>
            <p>{article.fullStory}</p> 
            <p>{article.viewCount}</p>
            {favouriteDisplay(article)}
        </div>
    
    )
}

export default ArticleDetail;