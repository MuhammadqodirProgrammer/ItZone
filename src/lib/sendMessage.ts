let tg = {
    token: '6844843142:AAGhgKTY9zURnTZYF3-XBUZpxjXyRwgTiJI',
    chat_id: '-1002016759420',
};
 function sendMessage(data: UserReq): sendRespType {
    const currentDate = new Date();
    const message =
        'Ismi:' +
        data.userName +
        '\n\nTelefon nomeri:' +
        data.phone +
        '\n\nVaqti:' +
        currentDate.toISOString();
    const encodedMessage = encodeURIComponent(message); // Xabarni kodlangan URL-ga joylashtiramiz
    const url = `https://api.telegram.org/bot${tg.token}/sendMessage?chat_id=${tg.chat_id}&text=${encodedMessage}`;


    try {
        const xht = new XMLHttpRequest();    
        // if (!xht.responseText) {
        //     throw new Error('Internetga ulanishda muammo yuz berdi. Iltimos, internet ulanganligingizni tekshiring.');
        // }
        xht.onreadystatechange = function () {
            if (xht.readyState == XMLHttpRequest.DONE) {
                if (JSON.parse(xht.responseText).ok) {
                    return {message:true}
                }
            }
        };
        xht.open('GET', url);
        xht.send();
        return {message:"So'rovingiz qabul qilindi, siz bilan tez orada bog'lanamiz " ,success:true}
    } catch (error:any) {
        console.log(error ,"errr");
        
        return {message:error.message ,success:false}
    }
}

export default sendMessage