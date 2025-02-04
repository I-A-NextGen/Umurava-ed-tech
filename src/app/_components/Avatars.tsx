import React from 'react'

const Avatars = () => {
  return (
        <div className="flex -space-x-2.5">
      <img
        className="rounded-full ring-4 ring-background size-8 object-cover "
        src="https://i.pinimg.com/736x/3d/0c/93/3d0c93e18c4086b7dfb37fd859360bcb.jpg"
        width={20}
        height={20}
        alt="Avatar 01"
      />
      <img
        className="rounded-full ring-4 ring-background size-8 object-cover "
        src="https://i.pinimg.com/736x/fd/53/3f/fd533f87907ead05ddbc4f59680b5f98.jpg"
        width={20}
        height={20}
        alt="Avatar 02"
      />
      <img
        className="rounded-full ring-4 ring-background size-8 object-cover "
        src="https://i.pinimg.com/736x/8f/35/02/8f35021b51be2fe88f637100999336c0.jpg"
        width={20}
        height={20}
        alt="Avatar 03"
      />
      <img
        className="rounded-full ring-4 ring-background size-8 object-cover "
        src="https://i.pinimg.com/736x/f3/ee/ce/f3eecef3b7866301e5dfe5c9208d77fe.jpg"
        width={20}
        height={20}
        alt="Avatar 04"
      />
    </div>
  )
}

export default Avatars