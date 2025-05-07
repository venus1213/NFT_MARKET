
export function deepSerialize(value: any): any {
    if (typeof value === "bigint") {
      return value.toString();
    }
    if (Array.isArray(value)) {
      return value.map(deepSerialize);
    }
    if (value !== null && typeof value === "object") {
      const newObj: any = {};
      for (const key in value) {
        newObj[key] = deepSerialize(value[key]);
      }
      return newObj;
    }
    return value;
  }

  export function addressToBytes32(address: string): `0x${string}` {
    if (!address.startsWith("0x") || address.length !== 42) {
      throw new Error("Invalid Ethereum address");
    }

    const paddedAddress = address.slice(2).padStart(64, "0");
    return `0x${paddedAddress}` as `0x${string}`;
  }