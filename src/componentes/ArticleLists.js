import React from "react";

function ArticleList(props) {
    const articles = props.articles;
    
    return (
        React.createElement('div', {className: 'article-list'},
            articles.map(article => (
                React.createElement('div', {className: 'article-container2', key: article.id},
                    React.createElement('div', {className: 'img-container'},
                        React.createElement('img', {src: article.image, alt: article.title})
                    ),
                    React.createElement('div', {className: 'article-body'},
                        React.createElement('h2', null, article.title),
                        React.createElement('p', null, article.description),
                        React.createElement('div', {className: 'article-footer'},
                            React.createElement('span', null, article.date + ' · '),
                            React.createElement('span', null, article.ReadingTime)
                        )
                    )
                )
            ))
        )
    );
};
export default ArticleList
