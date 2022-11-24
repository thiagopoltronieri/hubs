import { Component } from "bitecs";
import { HubsWorld } from "../app";
import { NetworkedMediaFrame, NetworkedTransform, NetworkedVideo } from "../bit-components";
import { defineNetworkSchema } from "../utils/bit-utils";
import { EntityID, CursorBuffer } from "../bit-systems/networking";

interface NetworkSchema {
  serialize: (
    world: HubsWorld,
    eid: EntityID,
    data: CursorBuffer,
    isFullSync: boolean,
    writeToShadow: boolean
  ) => boolean;
  deserialize: (world: HubsWorld, eid: EntityID, data: CursorBuffer) => void;
}

export const schemas: Map<Component, NetworkSchema> = new Map();
schemas.set(NetworkedMediaFrame, defineNetworkSchema(NetworkedMediaFrame));
schemas.set(NetworkedTransform, defineNetworkSchema(NetworkedTransform));
schemas.set(NetworkedVideo, defineNetworkSchema(NetworkedVideo));
export const networkableComponents = Array.from(schemas.keys());
