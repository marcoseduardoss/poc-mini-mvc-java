package br.me.mvc.util;
import java.io.File;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import br.me.mvc.controle.acoes.Action;
/**
 * 
 * @author marcos.eduardo
 *
 */
public enum JavaReflectionUtil {

    INSTANCE;//singleton
	
	Map<String, String> classesMap;
	
    private static Map<String, String> listDirectory(String dirPath, int level, Map<String, String> map) {
    	
    	File dir = new File(dirPath);
        File[] firstLevelFiles = dir.listFiles();
        
        if (firstLevelFiles != null && firstLevelFiles.length > 0) {
            for (File aFile : firstLevelFiles) {
            	
                String absolutePath = aFile.getAbsolutePath();
				
                if (aFile.isDirectory()) {
                    listDirectory(absolutePath, level + 1, map);
                } else {
                	
                		try {
                			
                			if(absolutePath.endsWith("class") && !absolutePath.contains("$")) {
                				
	                			String sufixpath = absolutePath.split("classes")[1].substring(1).replaceAll("\\\\", "\\.");
	                			sufixpath = sufixpath.replace(".class", "");
	                			String[] split = sufixpath.split("\\.");
								String fileName = split[split.length-1];
								map.put(fileName, sufixpath);
								
                			}
							
                		}catch (Exception e) {
                			//file not localizad - ignored
						}
                	}
            }
        }
        
        return map;
    }
    
    public Map<String, String> getClassesMap(String dirToList) {
    	
    	if(classesMap == null)
    		this.classesMap = JavaReflectionUtil.listDirectory(dirToList, 0, new HashMap<String, String>());
    	
		return this.classesMap;
	}


    
}