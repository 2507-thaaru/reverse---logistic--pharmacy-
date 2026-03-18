// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PackageTracker {

    struct Package {
        uint256 id;
        string name;
        string currentLocation;
        address owner;
        bool exists;
    }

    // Store all packages
    mapping(uint256 => Package) public packages;

    // Event when package is created
    event PackageCreated(uint256 id, string name, string location, address owner);

    // Event when location is updated
    event LocationUpdated(uint256 id, string newLocation);

    // 🔹 Create a new package
    function createPackage(
        uint256 _id,
        string memory _name,
        string memory _location
    ) public {

        require(!packages[_id].exists, "Package already exists");

        packages[_id] = Package({
            id: _id,
            name: _name,
            currentLocation: _location,
            owner: msg.sender,
            exists: true
        });

        emit PackageCreated(_id, _name, _location, msg.sender);
    }

    // 🔹 Update package location
    function updateLocation(
        uint256 _id,
        string memory _newLocation
    ) public {

        require(packages[_id].exists, "Package does not exist");

        // Optional: only owner can update
        require(packages[_id].owner == msg.sender, "Not authorized");

        packages[_id].currentLocation = _newLocation;

        emit LocationUpdated(_id, _newLocation);
    }

    // 🔹 Get package details
    function getPackage(uint256 _id) public view returns (
        uint256,
        string memory,
        string memory,
        address
    ) {
        require(packages[_id].exists, "Package does not exist");

        Package memory p = packages[_id];
        return (p.id, p.name, p.currentLocation, p.owner);
    }
}
