import React from 'react';

const Test = ({ data }) => {
    const posts = data.posts;

    return (
        <div>
            <h1>This is the test component</h1>
            <div>
                {posts && posts.length > 0 ? (
                    <ul>
                        {posts.map((post, index) => (
                            <li key={index}>
                                <a href={post.link} target="_blank" rel="noopener noreferrer">
                                    <h2 className="text-red-600">{post.title}</h2>
                                    <img src={post.thumbnail} alt={post.title} width="200" />
                                    <p>{post.description}</p>
                                    <p>{new Date(post.pubDate).toLocaleDateString()}</p>
                                </a>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No data available</p>
                )}
            </div>
        </div>
    );
};

export default Test;
