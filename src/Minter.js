import { useEffect, useState } from 'react'

const Minter = (props) => {
  //State variables
  const [walletAddress, setWallet] = useState('')
  const [status, setStatus] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [url, setURL] = useState('')

  useEffect(async () => {
    //TODO: implement
  }, [])

  const connectWalletPressed = async () => {
    //TODO: implement
  }

  const onMintPressed = async () => {
    //TODO: implement
  }

  return (
    <div className="main">
      <div className="Minter">
        <br></br>
        <h1 id="title">IXIONO NFT MINTER</h1>
        <p id="description">
          Simply add your asset's link, name, and description, then press
          "Mint."
        </p>
        <form>
          <h2 id="form-title"> Link to asset </h2>
          <input
            type="text"
            placeholder="e.g. https://gateway.pinata.cloud/ipfs/<hash>"
            onChange={(event) => setURL(event.target.value)}
          />
          <h2 id="form-title"> Name </h2>
          <input
            type="text"
            placeholder="e.g. My first NFT!"
            onChange={(event) => setName(event.target.value)}
          />
          <h2 id="form-title"> Description </h2>
          <input
            type="text"
            placeholder="e.g. Even cooler than cryptokitties ;)"
            onChange={(event) => setDescription(event.target.value)}
          />
        </form>
        <div className="buttons">
          <button id="mintButton" onClick={onMintPressed}>
            Mint NFT
          </button>
          <button id="walletButton" onClick={connectWalletPressed}>
            {walletAddress.length > 0 ? (
              'Connected: ' +
              String(walletAddress).substring(0, 6) +
              '...' +
              String(walletAddress).substring(38)
            ) : (
              <span>Connect Wallet</span>
            )}
          </button>
        </div>

        <p id="status">{status}</p>
      </div>
    </div>
  )
}

export default Minter
