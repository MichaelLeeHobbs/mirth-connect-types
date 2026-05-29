// javax.sql.* — JDBC RowSet API and the javax.sql.rowset(.spi) sub-namespaces.

declare namespace javax {
  namespace sql {
    /**
     * The interface that adds support to the JDBC API for the JavaBeans component model.
     * A RowSet object may be a JavaBeans component that can be used as a source of data.
     */
    interface RowSet extends java.sql.ResultSet {
      // RowSet extends ResultSet with additional properties
    }

    /**
     * An interface that must be implemented by a component that wants to be notified
     * when a significant event happens in the life of a RowSet object.
     */
    interface RowSetListener extends java.util.EventListener {
      /** Notifies registered listeners that a RowSet object in the given RowSetEvent object has changed. */
      rowSetChanged(event: RowSetEvent): void;
      /** Notifies registered listeners that a RowSet object has had a change in one of its rows. */
      rowChanged(event: RowSetEvent): void;
      /** Notifies registered listeners that a RowSet object's cursor has moved. */
      cursorMoved(event: RowSetEvent): void;
    }

    /**
     * An Event object generated when an event occurs to a RowSet object.
     */
    class RowSetEvent extends java.util.EventObject {
      constructor(source: RowSet);
    }

    namespace rowset {
      /**
       * A CachedRowSet object is a container for rows of data that caches its rows in memory.
       * Alias for java.sql.rowset.CachedRowSet.
       */
      interface CachedRowSet extends java.sql.rowset.CachedRowSet {}

      /**
       * An extension of SQLException that provides information about database warnings
       * set on RowSet objects.
       */
      class RowSetWarning extends java.sql.SQLException {
        constructor();
        constructor(reason: java.lang.String);
        constructor(reason: java.lang.String, SQLState: java.lang.String);
        constructor(reason: java.lang.String, SQLState: java.lang.String, vendorCode: int);
        /** Retrieves the warning chained to this RowSetWarning object. */
        getNextWarning(): RowSetWarning;
        /** Sets this RowSetWarning object as the next warning. */
        setNextWarning(warning: RowSetWarning): void;
      }

      namespace spi {
        /**
         * The synchronization mechanism that provides reader/writer capabilities for
         * disconnected RowSet objects.
         */
        interface SyncProvider {
          /** Returns the unique identifier for this SyncProvider object. */
          getProviderID(): java.lang.String;
          /** Returns a javax.sql.RowSetReader object. */
          getRowSetReader(): RowSetReader;
          /** Returns a javax.sql.RowSetWriter object. */
          getRowSetWriter(): RowSetWriter;
          /** Returns a constant indicating the grade of synchronization a RowSet object can expect. */
          getProviderGrade(): int;
          /** Sets a lock on the underlying data source at the level indicated by datasource_lock. */
          setDataSourceLock(datasource_lock: int): void;
          /** Returns the current data source lock severity level active in this SyncProvider implementation. */
          getDataSourceLock(): int;
          /** Returns whether this SyncProvider implementation can perform synchronization. */
          supportsUpdatableView(): int;
          /** Returns the release version of this SyncProvider instance. */
          getVersion(): java.lang.String;
          /** Returns the vendor name of this SyncProvider instance. */
          getVendor(): java.lang.String;
        }

        /**
         * The facility that a disconnected RowSet object calls on to populate itself with rows of data.
         */
        interface RowSetReader {
          /** Reads the new contents of the calling RowSet object. */
          readData(caller: RowSetInternal): void;
        }

        /**
         * An object that implements the RowSetWriter interface that can be called on
         * to write a RowSet object's contents back to the data source from which it obtained its data.
         */
        interface RowSetWriter {
          /** Writes the changes in this RowSet object to its data source. */
          writeData(caller: RowSetInternal): boolean;
        }

        /**
         * The interface that a RowSet object implements in order to present itself to a RowSetReader
         * or RowSetWriter object.
         */
        interface RowSetInternal {
          /** Retrieves the parameters that have been set for this RowSet object's command. */
          getParams(): java.lang.Object[];
          /** Retrieves the Connection object that was passed to this RowSet object. */
          getConnection(): java.sql.Connection;
          /** Sets the given RowSetMetaData object as the RowSetMetaData object for this RowSet object. */
          setMetaData(md: java.sql.RowSetMetaData): void;
          /** Retrieves a ResultSet object containing the original value of this RowSet object. */
          getOriginal(): java.sql.ResultSet;
          /** Retrieves a ResultSet object containing the original value of the current row only. */
          getOriginalRow(): java.sql.ResultSet;
        }
      }
    }
  }
}
