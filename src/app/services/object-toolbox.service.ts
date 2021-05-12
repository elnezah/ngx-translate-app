import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObjectToolboxService {
  private static readonly TAG = 'ObjectToolboxService';

  public constructor() {
  }

  public getValueForObjectPath(object: any, path: string[]): any {
    if (!path) {
      return null;
    } else if (path.length === 0) {
      return object;
    } else {
      const p = [...path];
      const child = object[p.shift()];
      if (child) {
        return this.getValueForObjectPath(child, p);
      } else {
        return null;
      }
    }
  }

  public setValueForObjectPath(value: any, object: any, path: string[]): void {
    if (!path) {
      return;
    } else if (path.length === 1) {
      object[path[0]] = value;
    } else {
      const p = [...path];
      const firstStep = p.shift();
      if (!object[firstStep]) {
        object[firstStep] = {};
      }
      this.setValueForObjectPath(value, object[firstStep], p);
    }
  }

  /**
   * Merges recursively the object of the first parameter in the object of the second parameter.
   * The second parameter will be overwritten
   * @param obj the object to be merged onto the target (will not be written)
   * @param target the target objet, to its structure will be added the whole first param object
   */
  public mergeIntoTarget(obj: any, target: any): void {
    if (!target) {
      target = {};
    }
    const keys = Object.keys(obj);

    for (const key of keys) {

      if (target[key]) {
        this.mergeIntoTarget(obj[key], target[key]);
      } else {
        if (this.isLeaf(obj[key])) {
          target[key] = obj[key];
        } else {
          target[key] = {};
          this.mergeIntoTarget(obj[key], target[key]);
        }
      }
    }
  }

  /**
   * Same as mergeIntoTarget but will not copy the values of the leaves, instead will only write null. The also means that target object
   * will get null on every leaf that exists in first parameter object (thus overwritten)
   * @param obj the object which structure will be merge into target (will to be written)
   * @param target the target object (might get overwritten)
   */
  public mergeStructureIntoTarget(obj: any, target: any): void {
    if (!target) {
      target = {};
    }
    const keys = Object.keys(obj);

    for (const key of keys) {
      if (target[key]) {
        this.mergeStructureIntoTarget(obj[key], target[key]);
      } else {
        if (this.isLeaf(obj[key])) {
          target[key] = target[key] ? target[key] : null; // Will define target[key] if it didn't exist
        } else {
          target[key] = {};
          this.mergeStructureIntoTarget(obj[key], target[key]);
        }
      }
    }
  }

  public isLeaf(o: any): boolean {
    return o === null || typeof o !== 'object';
  }
}
