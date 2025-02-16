using UnityEngine;

public class CharacterAnimation : MonoBehaviour
{
    private Animator animator;

    void Start()
    {
        animator = GetComponent<Animator>();
    }

    void Update()
    {
        if (Input.GetKeyDown(KeyCode.W))
        {
            animator.SetTrigger("Walk");
        }
        if (Input.GetKeyDown(KeyCode.S))
        {
            animator.SetTrigger("Idle");
        }
        // Adicione mais comandos de animação conforme necessário
    }
}
