export  function User({pId, pName, pUsername, pEmail, pPhone, pWebsite, pCompanyName, pCompanyCatchPhrase, pCompanyBs}) {


    return (
        <div>
            <h2>User</h2>
            <ul>
                 <li>id: {pId} </li>
                 <li>name: {pName} </li>
                 <li>username: {pUsername}</li>
                 <li>email: {pEmail}</li>
                 <li>phone: {pPhone}</li>
                 <li>website: {pWebsite}</li>
                 <li><b>company</b> name: {pCompanyName}</li>
                 <li><b>company</b> catch phrase: {pCompanyCatchPhrase}</li>
                 <li><b>company</b> bs: {pCompanyBs}</li>
            </ul>

        </div>
    );
}

export default User;