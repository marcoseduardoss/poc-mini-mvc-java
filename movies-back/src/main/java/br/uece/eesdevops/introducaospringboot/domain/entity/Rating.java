package br.uece.eesdevops.introducaospringboot.domain.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;
/**
 * movie_id,score,author,comment bookId
 * @author marco
 */
@Data
@Entity
@Table(name = "rating", schema = "public")
public class Rating {

    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn(name = "movie_id", nullable = false)
    private Movie movie;
    
    @Column(name = "score", nullable = false)
    private Integer score;
    
    @Column(nullable = false)
    private String author;
    
    @Column(nullable = false)
    private String comment;

}
