import React from 'react';

const AddUser = () => {
    const [name, setName] = useState(' ');
    const [lastname, setLastname] = useState(' ');
    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState(' ');

    return(
        <form >
            <div className="mb-3">                
                <label for="name" className="form-label">Title Task</label>
                <input type="text" name="name" className="form-control" id="name" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Date</label>
                <input type="date" name="lastname" className="form-control" id="exampleFormControlInput1" value={lastname} onChange={(event) => setLastname(event.target.value)} placeholder="Lastname" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Asignado</label>
                <input type="email" name="email" className="form-control" id="exampleFormControlInput1" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Info. Task</label>
                <input type="password" name="password" className="form-control" id="exampleFormControlInput1" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
            </div>
            <button type="submit" className="btn btn-primary col-2">{textBtn}</button>            
        </form>
    );
}