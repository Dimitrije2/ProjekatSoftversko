import React, { useState } from "react";

export function Contact() {
    let buttonStyle = {
        backgroundColor: "#949494",
        color: "blue",
        fontWeight: "bold",
        height: 50,
        width: 130
    };

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [personId, setPersonId] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('ime', firstName);
        formData.append('prezime', lastName);
        formData.append('godine', age);
        formData.append('jmbg', personId);
        formData.append('pol', gender);
        formData.append('action', 'insert'); // Dodajemo 'action' parametar

        try {
            const response = await fetch('http://localhost/submit.php', {
                method: 'POST',
                body: formData,
            });

            const data = await response.text();
            alert(data);
        } catch (error) {
            console.error('Greška prilikom slanja podataka:', error);
        }
    };

    const handleDelete = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('jmbg', personId);
        formData.append('action', 'delete'); // Dodajemo 'action' parametar

        try {
            const response = await fetch('http://localhost/submit.php', {
                method: 'POST',
                body: formData,
            });

            const data = await response.text();
            alert(data);
        } catch (error) {
            console.error('Greška prilikom brisanja podataka:', error);
        }
    };

    return (
        <>
            <h1>Klijent</h1>
            <h5>Unesite podatke</h5>
            <form>
                <label>
                    Ime:
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </label>
                <br />

                <label>
                    Prezime:
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </label>
                <br />

                <label>
                    Godine:
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </label>
                <br />

                <label>
                    JMBG:
                    <input
                        type="number"
                        value={personId}
                        onChange={(e) => setPersonId(e.target.value)}
                    />
                </label>
                <br />

                <label>
                    Pol:
                    <input
                        type="text"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    />
                </label>
                <br />

                <button type="submit" onClick={handleSubmit} style={buttonStyle}>Pošalji</button>
                <button type="submit" onClick={handleDelete} style={buttonStyle}>Obriši</button>
            </form>
        </>
    );
}
