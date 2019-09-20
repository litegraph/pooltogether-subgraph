// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Draw extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Draw entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Draw entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Draw", id.toString(), this);
  }

  static load(id: string): Draw | null {
    return store.get("Draw", id) as Draw | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get drawId(): BigInt {
    let value = this.get("drawId");
    return value.toBigInt();
  }

  set drawId(value: BigInt) {
    this.set("drawId", Value.fromBigInt(value));
  }

  get feeBeneficiary(): Bytes {
    let value = this.get("feeBeneficiary");
    return value.toBytes();
  }

  set feeBeneficiary(value: Bytes) {
    this.set("feeBeneficiary", Value.fromBytes(value));
  }

  get secretHash(): Bytes {
    let value = this.get("secretHash");
    return value.toBytes();
  }

  set secretHash(value: Bytes) {
    this.set("secretHash", Value.fromBytes(value));
  }

  get feeFraction(): BigInt {
    let value = this.get("feeFraction");
    return value.toBigInt();
  }

  set feeFraction(value: BigInt) {
    this.set("feeFraction", Value.fromBigInt(value));
  }

  get winner(): Bytes {
    let value = this.get("winner");
    return value.toBytes();
  }

  set winner(value: Bytes) {
    this.set("winner", Value.fromBytes(value));
  }

  get entropy(): Bytes {
    let value = this.get("entropy");
    return value.toBytes();
  }

  set entropy(value: Bytes) {
    this.set("entropy", Value.fromBytes(value));
  }

  get winnings(): BigInt {
    let value = this.get("winnings");
    return value.toBigInt();
  }

  set winnings(value: BigInt) {
    this.set("winnings", Value.fromBigInt(value));
  }

  get fee(): BigInt {
    let value = this.get("fee");
    return value.toBigInt();
  }

  set fee(value: BigInt) {
    this.set("fee", Value.fromBigInt(value));
  }

  get state(): string {
    let value = this.get("state");
    return value.toString();
  }

  set state(value: string) {
    this.set("state", Value.fromString(value));
  }

  get openedAt(): BigInt {
    let value = this.get("openedAt");
    return value.toBigInt();
  }

  set openedAt(value: BigInt) {
    this.set("openedAt", Value.fromBigInt(value));
  }

  get committedAt(): BigInt {
    let value = this.get("committedAt");
    return value.toBigInt();
  }

  set committedAt(value: BigInt) {
    this.set("committedAt", Value.fromBigInt(value));
  }

  get rewardedAt(): BigInt {
    let value = this.get("rewardedAt");
    return value.toBigInt();
  }

  set rewardedAt(value: BigInt) {
    this.set("rewardedAt", Value.fromBigInt(value));
  }
}

export class Player extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Player entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Player entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Player", id.toString(), this);
  }

  static load(id: string): Player | null {
    return store.get("Player", id) as Player | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get balance(): BigInt {
    let value = this.get("balance");
    return value.toBigInt();
  }

  set balance(value: BigInt) {
    this.set("balance", Value.fromBigInt(value));
  }

  get sponsorshipBalance(): BigInt {
    let value = this.get("sponsorshipBalance");
    return value.toBigInt();
  }

  set sponsorshipBalance(value: BigInt) {
    this.set("sponsorshipBalance", Value.fromBigInt(value));
  }
}

export class Admin extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Admin entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Admin entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Admin", id.toString(), this);
  }

  static load(id: string): Admin | null {
    return store.get("Admin", id) as Admin | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get addedAt(): BigInt {
    let value = this.get("addedAt");
    return value.toBigInt();
  }

  set addedAt(value: BigInt) {
    this.set("addedAt", Value.fromBigInt(value));
  }
}
