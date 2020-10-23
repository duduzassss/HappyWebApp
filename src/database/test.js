const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');


Database.then(async db => {
    // Inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-29.9298123",
        lng: "-51.0633997",
        name: "Lar de tdfhes",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "9999",
        images:[
            "https://images.unsplash.com/photo-1582167410766-a90eea4787ae?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            
            "https://images.unsplash.com/photo-1580516091765-3978351061b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"

        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "1"
        
    })

    // Consultar dados da tabela
    // const selectedOrphanages = await db.all("SELECT * FROM orphanages");
    // console.log(selectedOrphanages);

    // // consultar somente 1 orfanato pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "5"')
    console.log(orphanage)

    // // deletar dado da tabela
    // // console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
    // console.log(await db.run("DELETE FROM orphanages WHERE id = '3'"))
})