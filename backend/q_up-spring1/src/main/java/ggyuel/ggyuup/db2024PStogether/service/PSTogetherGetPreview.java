package ggyuel.ggyuup.db2024PStogether.service;

import ggyuel.ggyuup.db2024PStogether.dto.PSTogetherResponseDTO;
import ggyuel.ggyuup.global.DBConnection;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class PSTogetherGetPreview {
    public static ArrayList<PSTogetherResponseDTO.PSTogetherPreviewDTO> getPSTogetherPreview() {
        try {
            Connection conn = DBConnection.getDbPool().getConnection();
            System.out.println("DB 연결");


            String query = "SELECT * FROM DB2024_PStogether";
            PreparedStatement pstmt = conn.prepareStatement(query);
            ResultSet rs = pstmt.executeQuery();
            ArrayList<PSTogetherResponseDTO.PSTogetherPreviewDTO> result = new ArrayList<>();

            while (rs.next()) {
                // Process each row and add it to the result list
                int togetherid = rs.getInt("togetherid"); // 새로운 속성 가져오기
                int pid = rs.getInt("pid");
                String handle = rs.getString("handle");
                String togethertitle = rs.getString("togethertitle");
                result.add(new PSTogetherResponseDTO.PSTogetherPreviewDTO(togetherid, pid, togethertitle, handle)); //새로운 속성 가져오기
            }

            rs.close();
            pstmt.close();
            conn.close();
            return result;

        } catch (SQLException e){
            System.out.println(e);
        }
        return null;

    }
}
