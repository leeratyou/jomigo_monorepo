export interface Dict extends Object {
  [key: string]: any
}

declare global {
  interface Array<T> {
    uniq(property?: string, flat?: boolean): Array<T>;
  }
  
  interface String {
    capitalize(): string
    decapitalize(): string
  }
}

Object.defineProperty(Array.prototype, 'uniq', {
  value: function(property?: string, flat?: boolean) {
    if (property) {
      const cache = new Set()
      return this.filter((item: Dict) => {
        if (cache.has(item[property])) return false
        cache.add(item[property])
        return true
      })
    } else {
      return [...new Set(this)]
    }
  }
})

Object.defineProperty(String.prototype, 'capitalize', {
  value: function() {
    return this.charAt(0).toUpperCase() + this.slice(1)
  }
})

Object.defineProperty(String.prototype, 'decapitalize', {
  value: function() {
    return this.charAt(0).toLowerCase() + this.slice(1)
  }
})
