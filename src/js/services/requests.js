const  postData = async (url, data) => {
    let res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });
    return await res.json();
};

const  getResourse = async (url) => {
    let res = await fetch(url);
    return await res.json();
};

export {postData, getResourse};