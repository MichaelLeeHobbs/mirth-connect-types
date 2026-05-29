// java.math.* — arbitrary-precision numeric types referenced by the JDBC
// RowSet surface (e.g. MirthCachedRowSet.getBigDecimal / setBigDecimal).

declare namespace java {
  namespace math {
    /**
     * Immutable, arbitrary-precision signed decimal numbers. A BigDecimal
     * consists of an arbitrary precision integer unscaled value and a 32-bit
     * integer scale.
     */
    class BigDecimal extends java.lang.Object implements java.lang.Comparable<BigDecimal> {
      constructor(val: java.lang.String | string);
      /** Returns a BigDecimal whose value is (this + augend). */
      add(augend: BigDecimal): BigDecimal;
      /** Returns a BigDecimal whose value is (this - subtrahend). */
      subtract(subtrahend: BigDecimal): BigDecimal;
      /** Returns a BigDecimal whose value is (this * multiplicand). */
      multiply(multiplicand: BigDecimal): BigDecimal;
      /** Returns a BigDecimal whose value is (this / divisor). */
      divide(divisor: BigDecimal): BigDecimal;
      /** Compares this BigDecimal with the specified BigDecimal. */
      compareTo(val: BigDecimal): int;
      /** Converts this BigDecimal to a BigInteger. */
      toBigInteger(): BigInteger;
      /** Returns the scale of this BigDecimal. */
      scale(): int;
      /** Returns the string representation of this BigDecimal. */
      toString(): string;
    }

    /**
     * Immutable arbitrary-precision integers.
     */
    class BigInteger extends java.lang.Object implements java.lang.Comparable<BigInteger> {
      constructor(val: java.lang.String | string);
      /** Returns a BigInteger whose value is (this + val). */
      add(val: BigInteger): BigInteger;
      /** Returns a BigInteger whose value is (this - val). */
      subtract(val: BigInteger): BigInteger;
      /** Returns a BigInteger whose value is (this * val). */
      multiply(val: BigInteger): BigInteger;
      /** Compares this BigInteger with the specified BigInteger. */
      compareTo(val: BigInteger): int;
      /** Returns the string representation of this BigInteger. */
      toString(): string;
    }
  }
}
