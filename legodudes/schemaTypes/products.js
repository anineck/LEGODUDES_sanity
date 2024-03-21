export const products = {
    title:"produkter",
    name:"products",
    type: "document",
    fields: [
        {
            title: "produktnavn",
            name: "productname",
            type: "string"
        },
        {
            title:"Produktlink",
            name: "producturl",
            type: "slug",
            options: {
                source: "productname",
                slugify: input => input.toLowerCase().replace(/\s+/g,'-')
            }
        },
        {
            title:"Pris",
            name:"price",
            type:"number"
        },
        {
            title:"Produktbilde",
            name:"productimage",
            type:"image"
        },
        {
            title:"Kategori",
            name:"category",
            type: "reference",
            to: [{type: "categories"}]
        },
        {
            title:"Lager",
            name:"storage",
            type: "number",
        }
    ]
}