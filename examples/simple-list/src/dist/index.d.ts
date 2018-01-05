/// <reference types="react" />
import * as React from "react";
import * as firebase from "firebase";
export interface QueryMap {
    [key: string]: firebase.firestore.Query;
}
export declare function createContainer(WrappedComponent: any, queryMapFn: (db: any) => QueryMap): {
    new (props: any): {
        results: any;
        componentWillMount(): void;
        componentWillUnmount(): void;
        render(): any;
        setState<K extends string>(state: any, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<any>;
        state: Readonly<any>;
        context: any;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
};
export default createContainer;
