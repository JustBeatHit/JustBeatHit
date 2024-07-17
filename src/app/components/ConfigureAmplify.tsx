"use client";

import { Amplify } from "aws-amplify";
import outputs from "~/amplify_outputs.json";
import { useEffect } from "react";
import { Hub } from "aws-amplify/utils";
import { CONNECTION_STATE_CHANGE, ConnectionState } from "aws-amplify/api";

Amplify.configure(outputs, { ssr: true });

export default function ConfigureAmplifyClientSide() {
  useEffect(() => {
    Hub.listen('api', (data: any) => {
        console.log(data);
        const { payload } = data;
        if (payload.event === CONNECTION_STATE_CHANGE) {
            const connectionState = payload.data.connectionState as ConnectionState;
            console.log(connectionState);
        }
    });
}, [])

  return null;
}