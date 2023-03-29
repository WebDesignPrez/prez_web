import data from "../data/data";

function BlogPosts() {
    const item = data.find((item) => item.id === 2);

    return (
        <div>
            <h1>{item.title}</h1>
            <img src={item.image} alt={item.title} />
            <p>{item.description}</p>
            {/* ... rest of the information */}
        </div>
    );
}

export default BlogPosts;