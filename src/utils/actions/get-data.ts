export async function getDataHome(){
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects/667dadbaf57346cb6a764614?read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata`);

        if(!res.ok){
            throw new Error("Filed to fetch data")
        }

        return res.json()

    } catch (err) {
        throw new Error('Filed Get Data Home')
    }
}