package ggyuel.ggyuup.global;
import com.zaxxer.hikari.HikariDataSource;

public class DBConnection {
    private static HikariDataSource dbPool;

    static {
        dbPool = new HikariDataSource();
        dbPool.setJdbcUrl("jdbc:mysql://localhost:3306/DB2024Team01?useUnicode=true&characterEncoding=utf8");
        dbPool.setUsername("root");
        dbPool.setPassword("celina324");

        // 추가 설정
        dbPool.setMinimumIdle(5); // 최소 유휴 상태의 커넥션 수
        dbPool.setMaximumPoolSize(10); // 풀의 최대 크기
        dbPool.setAutoCommit(true); // 자동 커밋 활성화
        dbPool.setPoolName("MyPool"); // 풀 이름
    }

    public static HikariDataSource getDbPool() {
        return dbPool;
    }
}