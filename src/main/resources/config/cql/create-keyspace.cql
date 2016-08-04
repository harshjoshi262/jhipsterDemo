CREATE KEYSPACE IF NOT EXISTS jhipsterDemo
    WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 1 }
    AND DURABLE_WRITES = true;
