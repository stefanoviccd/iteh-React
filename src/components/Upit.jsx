
import React from 'react'

function Upit({ product, posaljiUpit }) {
    
    return (
        <div className='gridDiv'>
            <div className='product-img'>
                <img src={product.slika}></img>
            </div>
            <div className='product-info'>
                <h2>{product.naziv}</h2>

                <p className='dp' ><b>Šifra proizvoda: {product.id}</b></p>
                <p className='dp'>Proizvodjač: {product.proizvodjac}</p>
                <p className='dp'>Debljina: {product.debljina}</p>
                <p className='dp'>Dužina: {product.duzina}</p>
                <p className='dp'>Širina: {product.sirina}</p>
                <p className='dp'>Način prodaje: {product.nacinProdaje}</p>
                <p className='dp'>Cena: <b>{product.cena}</b></p>
                <label className='dpl' >Količina

                    <input type="number" min="0" name="name" id="kol"style={{ width: 100 + "px", marginLeft: 10 + "px" }} />
                </label><br></br>
                <button className='btnUpit' onClick={() => posaljiUpit(product.id, document.getElementById("kol").value)} >Pošalji upit</button>


            </div>

        </div>
    )
}

export default Upit
