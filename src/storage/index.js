

export async function getLinkSave(key) {
    const linkss=await localStorage.getItem(key)

    let savesLink=JSON.parse(linkss) || []

    return savesLink
}

export async function linkSave(key,newKey){
    let linkStorage=await getLinkSave(key)

    

   const linkContent=linkStorage.some(link=> link.id === newKey.id)

    if(linkContent){
        console.log('Link já existe')
        return
    }
   

    linkStorage.push(newKey)
    localStorage.setItem(key,JSON.stringify(linkStorage))
}

export async function removeLink(links,id){
    let linkremove=links.filter(item =>{
        return(item.id !== id)
    })

    localStorage.setItem('@linkcurtos',JSON.stringify(linkremove))
    return linkremove
}